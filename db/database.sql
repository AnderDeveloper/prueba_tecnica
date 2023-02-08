CREATE DATABASE IF NOT EXISTS empresas;
USE empresas;
CREATE TABLE companys(
    id INT(15) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    country VARCHAR(20) DEFAULT NULL,
    hubspot_id INT(15) NOT NULL,
    is_active BIN NOT NULL,
    create_date DATE NOT NULL,
    PRIMARY KEY (id)
);
