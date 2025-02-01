# MyGames

# MyGames

MyGames is a comprehensive Django-based web application designed to manage and display game scores. This project features robust user authentication, efficient score management, and an intuitive admin interface. Users can enjoy different game modes, track their scores in real-time, and compete on  leaderboard.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

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
2. Register a new user account or log in with the superuser credentials you created.
4. Use the admin interface to manage users and game scores:
   - Go to `http://127.0.0.1:8000/admin/`.
   - Log in with the superuser credentials you created during installation.
   - Use the admin interface to add, edit, or delete users and game scores.
5. Choose the game mode - Easy, Medium, or Hard.
6. View your current score as you play.
7. View your highest score.
8. Check the leaderboard to see other players' highest scores.
9. Log out when you are done using the application.

## Features

- User authentication and management
- Score management
- Admin interface for managing users and scores
- Static files and templates
- Game modes: Easy, Medium, Hard
- Real-time score tracking
- User-specific highest score display
- Leaderboard showcasing top players' scores



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

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork the repository:**
    ```sh
    git fork https://github.com/yourusername/AnimeRecommendations.git
    ```

2. **Create your feature branch:**
    ```sh
    git checkout -b feature/YourFeature
    ```

3. **Commit your changes:**
    ```sh
    git commit -m 'Add some feature'
    ```

4. **Push to the branch:**
    ```sh
    git push origin feature/YourFeature
    ```

5. **Open a pull request.**
