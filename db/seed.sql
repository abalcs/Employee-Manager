-- Employees Starter Table

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Michael', 'Scott', 1, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Dwight', 'Schrute', 2, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Jim', 'Halpert', 3, 1);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Toby', 'Flenderson', 4, 3);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Pam', 'Beasely', 5, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Darryl', 'Philbin', 6, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Andy', 'Bernard', 7, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Angela', 'Martin', 8, 4);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Kelly', 'Kapoor', 9, 2);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('Kevin', 'Malone', 10, 4);


-- Roles Starter Table

INSERT INTO roles (title, salary, department_id) VALUES ('Regional Manager', 80000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Assistant TO Regional Manager', 50000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Assistant Regional Manager', 60000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ('Human Resources', 70000, 3);
INSERT INTO roles (title, salary, department_id) VALUES ('Reception', 40000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Warehouse Foreman', 65000, 5);
INSERT INTO roles (title, salary, department_id) VALUES ('Regional Sales Director', 70000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Senior Accountant', 65000, 4);
INSERT INTO roles (title, salary, department_id) VALUES ('Customer Service', 50000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ('Accountant', 55000, 4);

-- Department Starter Table

INSERT INTO departments (dept_name) VALUES ('Management');
INSERT INTO departments (dept_name) VALUES ('Sales & Service');
INSERT INTO departments (dept_name) VALUES ('Human Resources');
INSERT INTO departments (dept_name) VALUES ('Accounting');
INSERT INTO departments (dept_name) VALUES ('Warehouse');


