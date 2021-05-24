DROP DATABASE IF EXISTS employeeMgr;

CREATE DATABASE employeeMgr;

USE employeeMgr;

CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER(10),
    manager_id INTEGER NULL(10),
    PRIMARY KEY (id)
)

CREATE TABLE title (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(7, 2),
    department_id INTEGER(10),
    PRIMARY KEY (id)
)

CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30)
)