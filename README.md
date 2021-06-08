# Fampay-YT-API

This is the solution code for Fampay-YouTube-API in Node

## API Reference

---

### APIs for Users

---

#### Get videos

```http
  GET /api/videos?page=2&limit=4
```

|  Query  | Description                 |
| :-----: | --------------------------- |
| `page`  | Number of pages to skip     |
| `limit` | Number of video in one page |

#### Search for title or description

```http
  GET /api/videos/searcg?q=vlog
```

| Query | Description                                        |
| :---: | -------------------------------------------------- |
|  `q`  | Search query for searching in title or description |

---

---

### API for internal working

---

```http
  POST /api/videos/all
```

Example Body :
{
videos : [
{...},
{...},
{...}
]
}

## Installation

Run this project using node, follow these guidelines:

```bash
  git clone https://github.com/abhishek-geek/fampay-yt-api
  cd fampay-yt-api
  npm install
```

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` - Any Empty Port for localhost

`MONGODB_URI` - MongoDB connection string

`YOUTUBE_TOKEN` - list of several YouTube API keys separated by ','

#### Example:

PORT=3003

MONGODB_URI=mongodb+srv://<user>:<password>@fampay.ygx8k.mongodb.net/<database_name>?retryWrites=true&w=majority

YOUTUBE_TOKEN="key_one, key_2, key_3"

  
To run Development server
  
```bash
  npm run dev
```

Or run using

```bash
  npm start
```

---

---
