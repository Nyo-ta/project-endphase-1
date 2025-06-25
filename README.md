# project-endphase-1

This is a simple web application that allows users to search for dog breeds using **[The Dog API](https://thedogapi.com/)**. It fetches details like the breed's name, temperament, lifespan, what the breed was bred for, and an image of the dog (if available).

## Features

- Search for any dog breed by name
- Fetch breed details and display them on the page
- Fallback image shown if breed image is unavailable
- Responsive and beginner-friendly code

##  Technologies Used

- HTML
- CSS
- JavaScript (DOM & Fetch API)
- [The Dog API](https://api.thedogapi.com/v1)

## 📸 Preview

![screenshot](https://via.placeholder.com/800x400?text=Preview+Coming+Soon)

## How It Works

1. User types a breed name in the input field
2. The app sends a request to `https://api.thedogapi.com/v1/breeds/search?q=breedName`
3. It displays:
   - Dog image (if available)
   - Name
   - Temperament
   - Life span
   - Purpose it was bred for

