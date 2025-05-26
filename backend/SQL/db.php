<?php

$db = mysqli_connect("localhost", "root", "", "9jamart");

$tables = [
 "user" => 'CREATE TABLE IF NOT EXISTS users (
    id CHAR(125) PRIMARY KEY,
    email CHAR(125) UNIQUE NOT NULL,
    country_code CHAR(5) NOT NULL,
    phone_number CHAR(15) UNIQUE NOT NULL,
    password CHAR(125) NOT NULL,
    house_no CHAR(10),
    street_name CHAR(125),
    state_of_residence CHAR(64) NOT NULL,
    country_of_residence CHAR(32) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)',

 "products" => 'CREATE TABLE IF NOT EXISTS products (
 id CHAR(125) PRIMARY KEY,
 name CHAR(255) NOT NULL,
 description VARCHAR(500) NOT NULL,
 price DECIMAL(10,2) UNSIGNED NOT NULL,
 quantity INT(10) UNSIGNED NOT NULL DEFAULT 1,
 categories ENUM("Men", "Women", "Unisex") NOT NULL DEFAULT "Unisex",
 pictures LONGBLOB NOT NULL,
 rating INT(10) UNSIGNED DEFAULT 0,
 rating_count INT(10) UNSIGNED DEFAULT 0,
 uploaded_by CHAR(125) NOT NULL,
 comments LONGTEXT,
 is_promo BOOLEAN DEFAULT FALSE,
 is_banned BOOLEAN DEFAULT FALSE,
 created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
 updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 FOREIGN KEY (uploaded_by) REFERENCES users(id))',

 "vendors" => 'CREATE TABLE IF NOT EXISTS vendors (
    id CHAR(125) PRIMARY KEY,
    name CHAR(125) UNIQUE NOT NULL,
    business_type ENUM("individual", "organization") NOT NULL,
    business_category SET("fashion", "entertainment", "others") NOT NULL,
    email CHAR(125) UNIQUE NOT NULL,
    country_code CHAR(5) NOT NULL,
    phone_number CHAR(15) UNIQUE NOT NULL,
    address CHAR(125) NOT NULL,
    rating INT(10) UNSIGNED DEFAULT 0,
    rating_count INT(10) UNSIGNED DEFAULT 0,
    reviews LONGTEXT,
    reports LONGTEXT,
    report_count SMALLINT(3),
    is_banned BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)',

"cart" => 'CREATE TABLE IF NOT EXISTS cart (
    id CHAR(125) UNIQUE NOT NULL,
    user_id CHAR(125) UNIQUE NOT NULL,
    product_id CHAR(125) UNIQUE NOT NULL,
    quantity INT(10) UNSIGNED NOT NULL DEFAULT 1,
    total_price INT(10) UNSIGNED NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (user_id) REFERENCES users(id))',

    "wishlist" => 'CREATE TABLE IF NOT EXISTS wishlist (
    id CHAR(125) NOT NULL,
    user_id CHAR(125) NOT NULL,
    product_id CHAR(125) UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (user_id) REFERENCES users(id))'
];

foreach ($tables as $table => $sql) {
 $create_table = mysqli_query($db, $sql);

 if($create_table == false) {
  echo mysqli_error($db) . "<br /> <br />";
 }

}