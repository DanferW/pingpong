# pingpong

# Instalation

1.- Clone repository:
  git clone (repository URL)

## Back-end

- 1.- Inside root of server folder run in terminal the following command:
  ```
  npm install
  ```

- 2.- Create database with the following code in mysql:
  ```
  CREATE DATABASE  IF NOT EXISTS `ping_pong`;
  USE `ping_pong`;
  
  DROP TABLE IF EXISTS `game`;
  CREATE TABLE `game` (
  `game_id` int NOT NULL AUTO_INCREMENT,
  `player1` varchar(45) NOT NULL,
  `player2` varchar(45) NOT NULL,
  `winner` varchar(45) NOT NULL,
  PRIMARY KEY (`game_id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  
  LOCK TABLES `game` WRITE;
  
  INSERT INTO `game` VALUES (6,'Daniel','Fernando','No one');
  UNLOCK TABLES;
  
  DROP TABLE IF EXISTS `user`;

  CREATE TABLE `user` (
    `user_id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(45) NOT NULL,
    `wins` int unsigned NOT NULL,
    `games` int unsigned NOT NULL,
    PRIMARY KEY (`user_id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  
  LOCK TABLES `user` WRITE;

  INSERT INTO `user` VALUES (1,'Daniel',12,5),(2,'Fernando',4,3),(3,'Steve',0,0),(4,'Carlos',0,0),(5,'Tony',0,0),(6,'Erick',0,0),(7,'a',0,0),(8,'b',0,0),(9,'Mario',0,0),(10,'Amber',0,0);

  UNLOCK TABLES;
  ```
  
- 3.- In dbConnection.js change user and password according with your credentials in mysql:
  ```
  const connection = mysql.createConnection({
  host: "localhost",
  database: "ping_pong",
  user: "root",
  password: "root",
  });
  ```

- 4.- execute the application with:
  ```
  npm run server
  ```
  
  ## Front-end

- 1.- Inside root of client folder run in terminal the following command:
  ```
  npm install
  ```
  
- 2.- execute the application with:
  ```
  npm start
  ```
