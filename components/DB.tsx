import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';

interface Plane {
    model: string;
    registration: string;
    airline: string;
}

const DB: React.FC = () => {
    const [planes, setPlanes] = useState<Plane[]>([]);
    const [db, setDb] = useState<SQLite.SQLiteDatabase | null>(null);

    useEffect(() => {
        const initDatabase = async () => {
            try {
                // Öffne oder erstelle die Datenbank
                const database = await SQLite.openDatabaseAsync('planes.db');
                setDb(database);

                // Erstelle Tabelle
                await database.execAsync(
                    `
                        CREATE TABLE IF NOT EXISTS planes (
                                                              model TEXT PRIMARY KEY NOT NULL,
                                                              registration TEXT NOT NULL,
                                                              airline TEXT
                        );
                    `
                );

                // Daten laden
                fetchPlanes(database);
            } catch (error) {
                console.error('Fehler beim Initialisieren der Datenbank:', error);
            }
        };

        initDatabase();
    }, []);

    const fetchPlanes = async (database: SQLite.SQLiteDatabase) => {
        try {
            const result = await database.execAsync(`SELECT * FROM planes;`);
            // @ts-ignore
            const rows = result['rows'] || [];
            setPlanes(rows as Plane[]);
        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
        }
    };

    const addPlane = async () => {
        if (!db) return;

        try {
            await db.execAsync(
                `
                    INSERT INTO planes (model, registration, airline)
                    VALUES (?, ?, ?);
                `,
            );
            
            fetchPlanes(db);
        } catch (error) {
            console.error('Fehler beim Hinzufügen eines Flugzeugs:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Flugzeug hinzufügen" onPress={addPlane} />
            <FlatList
                data={planes}
                keyExtractor={(item) => item.model}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.title}>{item.model}</Text>
                        <Text>{item.airline}</Text>
                        <Text>{item.registration}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});

export default DB;
