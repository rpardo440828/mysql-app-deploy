import { db } from "../db.js";

////////////////////////////////Start of Books////////////////////////////
//Get all Books in the collection
export const getBooks = (req,res)=>{
    const q = "SELECT c.id, c.title, c.desc, c.img FROM users u JOIN collectionpost c ON u.id = c.uid WHERE c.cat='book' AND u.id=?";

    db.query(q, [req.params.id], (err, data)=>{
        if(err) {
            return res.json(err);
        }

        return res.status(200).json(data);
    });
};

//Add a new book to the collection
export const addBook = (req,res)=>{

    const q = "INSERT INTO collectionpost (`title`, `desc`, `img`, `uid`, `cat`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.uid,
        req.body.cat,
    ];
    db.query(q, [values], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.json("Book has been created!");
    });
};

//Delete a book from the collection
export const deleteBook = (req,res)=>{
    const q = " DELETE FROM collectionpost c WHERE c.id = ?";
    const bookId = [req.params.bid];
    db.query(q, [bookId], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
};

//Update a book from the collection
export const updateBook = (req,res)=>{
    const q = "UPDATE collectionpost SET `title` = ?, `desc` = ?, `img` = ? WHERE id = ?";
    const bookId = [req.body.bid];
    const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
    ];

    db.query(q, [...values, bookId], (err, data)=>{
        if(err) return res.json(err);
        return res.json({updated: true});
    });
};

//Get a single book for the update page
export const getBook = (req,res)=>{
    const values = [req.params.bid];
    const q = "SELECT c.title, c.desc, c.img FROM collectionpost c WHERE c.id = ?";
    db.query(q, [...values], (err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
};

////////////////////End of Books/////////////////////////////////////////

////////////////////Start of Movies//////////////////////////////////////

//Get all Movies in the collection
export const getMovies = (req,res)=>{
    const q = "SELECT c.id, c.title, c.desc, c.img FROM users u JOIN collectionpost c ON u.id = c.uid WHERE c.cat='movie' AND u.id=?";

    db.query(q, [req.params.id], (err, data)=>{
        if(err) {
            return res.json(err);
        }

        return res.status(200).json(data);
    });
};

//Add a new movie to the collection
export const addMovie = (req,res)=>{

    const q = "INSERT INTO collectionpost (`title`, `desc`, `img`, `uid`, `cat`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.uid,
        req.body.cat,
    ];
    db.query(q, [values], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.json("Movie has been created!");
    });
};

//Delete a movie from the collection
export const deleteMovie = (req,res)=>{
    const q = " DELETE FROM collectionpost c WHERE c.id = ?";
    const movieId = [req.params.bid];
    db.query(q, [movieId], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
};

//Update a movie from the collection
export const updateMovie = (req,res)=>{
    const q = "UPDATE collectionpost SET `title` = ?, `desc` = ?, `img` = ? WHERE id = ?";
    const movieId = [req.body.bid];
    const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
    ];

    db.query(q, [...values, movieId], (err, data)=>{
        if(err) return res.json(err);
        return res.json({updated: true});
    });
};

//Get a single movie for the update page
export const getMovie = (req,res)=>{
    const values = [req.params.bid];
    const q = "SELECT c.title, c.desc, c.img FROM collectionpost c WHERE c.id = ?";
    db.query(q, [...values], (err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
};

///////////////////////////////End of Movies////////////////////////////////////////

///////////////////////////////Start of Shows//////////////////////////////////////

//Get all Shows in the collection
export const getShows = (req,res)=>{
    const q = "SELECT c.id, c.title, c.desc, c.img FROM users u JOIN collectionpost c ON u.id = c.uid WHERE c.cat='show' AND u.id=?";

    db.query(q, [req.params.id], (err, data)=>{
        if(err) {
            return res.json(err);
        }

        return res.status(200).json(data);
    });
};

//Add a new show to the collection
export const addShow = (req,res)=>{

    const q = "INSERT INTO collectionpost (`title`, `desc`, `img`, `uid`, `cat`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.uid,
        req.body.cat,
    ];
    db.query(q, [values], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.json("Show has been created!");
    });
};

//Delete a show from the collection
export const deleteShow = (req,res)=>{
    const q = " DELETE FROM collectionpost c WHERE c.id = ?";
    const showId = [req.params.bid];
    db.query(q, [showId], (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
};

//Update a show from the collection
export const updateShow = (req,res)=>{
    const q = "UPDATE collectionpost SET `title` = ?, `desc` = ?, `img` = ? WHERE id = ?";
    const ShowId = [req.body.bid];
    const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
    ];

    db.query(q, [...values, ShowId], (err, data)=>{
        if(err) return res.json(err);
        return res.json({updated: true});
    });
};

//Get a single show for the update page
export const getShow = (req,res)=>{
    const values = [req.params.bid];
    const q = "SELECT c.title, c.desc, c.img FROM collectionpost c WHERE c.id = ?";
    db.query(q, [...values], (err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
};