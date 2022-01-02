# Create Elasticsearch Dataset

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blueviolet.svg)](http://unlicense.org/)
[![Version](https://img.shields.io/npm/v/create-elasticsearch-dataset.svg)](https://npmjs.org/package/create-elasticsearch-dataset)
[![CodeQL](https://github.com/rap2hpoutre/create-elasticsearch-dataset/workflows/CodeQL/badge.svg)](https://github.com/rap2hpoutre/create-elasticsearch-dataset-dataset/actions?query=codeql-analysis "Code quality workflow status")
[![Build and release](https://github.com/rap2hpoutre/create-elasticsearch-dataset/actions/workflows/release.yml/badge.svg)](https://github.com/rap2hpoutre/create-elasticsearch-dataset-dataset/actions?query=release)

Create a sample dataset for Elasticsearchc with one command.

## Usage

### Books dataset

Source: https://www.kaggle.com/dylanjcastillo/7k-books-with-metadata

Create a "books" index with 6800+ documents:

```sh
npx create-elasticsearch-dataset --dataset=books
```

Sample document:

```json
{
  "isbn13": "9780002005883",
  "isbn10": "0002005883",
  "title": "Gilead",
  "subtitle": "",
  "authors": "Marilynne Robinson",
  "categories": "Fiction",
  "thumbnail": "http://books.google.com/books/…",
  "description": "A NOVEL THAT READERS and critics have been…",
  "published_year": "2004",
  "average_rating": "3.85",
  "num_pages": "247",
  "ratings_count": "361"
}
```

### Movies dataset

Source: https://www.kaggle.com/harshitshankhdhar/imdb-dataset-of-top-1000-movies-and-tv-shows

Create a "movies" index with 1000 documents:

```sh
npx create-elasticsearch-dataset --dataset=movies
```

Sample document:

```json
{
  "Poster_Link": "https://m.media-amazon.com/images/M/…",
  "Series_Title": "The Shawshank Redemption",
  "Released_Year": "1994",
  "Certificate": "A",
  "Runtime": "142 min",
  "Genre": "Drama",
  "IMDB_Rating": "9.3",
  "Overview": "Two imprisoned men bond over a number…",
  "Meta_score": "80",
  "Director": "Frank Darabont",
  "Star1": "Tim Robbins",
  "Star2": "Morgan Freeman",
  "Star3": "Bob Gunton",
  "Star4": "William Sadler",
  "No_of_Votes": "2343110",
  "Gross": "28,341,469"
}
```

## Test and build

Run test with [jest](https://jestjs.io/):

```
yarn test
```

Build with [ncc](https://github.com/vercel/ncc):

```
ncc build src/index.ts
```
