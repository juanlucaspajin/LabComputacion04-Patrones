<?php

namespace LABComputacion4;

/**
 * Database connection class.
 */

class Database {

    private static $_instance;

    /**
     * El constructor de la clase Database. Deber private/protected ya que no se deben poder crear objetos
     * de esta clase en otro lado que no sea aqui.
     */
    protected function __construct() {
        $servername = "localhost";
        $username = "username";
        $password = "password";
        $database = "mydatabase"

        // Create connection
        self::$_instance = new mysqli($servername, $username, $password, $database);

        // Check connection
        if (self::$_instance->connect_error) {
            die("Connection failed: " . self::$_instance->connect_error);
        }
        echo "Connected successfully";
    }

    /**
     * Devuelve la instancia de la base de datos.
     *
     * @return Database
     */
    public static function getInstance(): Database {
        if (!isset(self::$_instance)) {
            self::$_instance = new Database();
        }
        return self::$_instance;
    }
}

// Ejemplo de implementacion
public function getClients() {
    $db = Database::getInstance();
    $result = $db->query("SELECT * FROM clients");
    return $result;
}