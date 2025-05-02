# Puzzix

## Prérequis

- **Node.js** (version 16 ou supérieure)
- **npm** (gestionnaire de paquets Node.js)
- **Docker** (pour exécuter MinIO)

---

## Installation

1. Clonez le dépôt :
   ```bash
   git clone <URL_DU_DEPOT>
   cd Bill
   npm install
   node index.js
   ```
2. Installez MinIO via Docker :
   ```bash
    docker compose up -d
   ```

3. Accédez à l'interface web de MinIO :
    ```
    http://localhost:8900/login
    ```

4. Connectez-vous avec les identifiants suivants :
    - **Username** : ` minio`
    - **Password** : ` password`

5. Créez un bucket nommé `puzzix` pour stocker les fichiers.