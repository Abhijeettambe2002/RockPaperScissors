# MyGames

MyGames is a Django-based web application designed to manage and display game scores. This project includes user authentication, score management, and a simple admin interface.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Python 3.8 or higher
- Django 5.1.4
- Virtualenv

### Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/MyGames.git
    cd MyGames
    ```

2. Create a virtual environment:
    ```sh
    python -m venv myenv
    ```

3. Activate the virtual environment:
    - On Windows:
        ```sh
        myenv\Scripts\activate
        ```
    - On macOS/Linux:
        ```sh
        source myenv/bin/activate
        ```

4. Install the required packages:
    ```sh
    pip install -r requirements.txt
    ```

5. Apply migrations:
    ```sh
    python manage.py migrate
    ```

6. Create a superuser:
    ```sh
    python manage.py createsuperuser
    ```

7. Run the development server:
    ```sh
    python manage.py runserver
    ```

## Usage

1. Open your web browser and go to `http://127.0.0.1:8000/`.
2. Log in with the superuser credentials you created.
3. Use the admin interface to manage game scores and users.

## Features

- User authentication and management
- Score management
- Admin interface
- Static files and templates

## Project Structure

- **MyGames**: Main project directory
  - **MyGames/**: Contains project settings, URLs, and views
    - `__init__.py`: Initializes the package
    - `asgi.py`: ASGI configuration for deployment
    - `settings.py`: Project settings
    - `urls.py`: URL routing for the project
    - `views.py`: Views for handling user authentication and main page
    - `wsgi.py`: WSGI configuration for deployment
  - **static/**: Contains static files (CSS, JavaScript)
    - `css/`: CSS files
    - `images/`: Image files
    - `js/`: JavaScript files
  - **templates/**: Contains HTML templates
    - `index.html`: Main page template
    - `login.html`: Login page template
    - `registration.html`: Registration page template
    - `watchlist.html`: Watchlist page template
  - **scores/**: Contains the score-related models, views, and templates
    - `__init__.py`: Initializes the app package
    - `admin.py`: Admin configuration for the scores model
    - `apps.py`: Application configuration
    - `forms.py`: Forms for score creation and update
    - `migrations/`: Database migrations
    - `models.py`: Scores model definition
    - `tests.py`: Unit tests for the scores app
    - `views.py`: Views for handling score-related requests
  - `manage.py`: Django's command-line utility for administrative tasks
  - `db.sqlite3`: SQLite database file

## Contributing

We welcome contributions! Please read our contributing guidelines for more information.

## License

This project is licensed under the MIT License. See the LICENSE file for details.