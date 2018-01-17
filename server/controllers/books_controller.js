let books = []
let id = 0

module.exports = {
    // post
    create: (req, res)=>{
        //info req.body
        id++
        let newBook = {
            title: req.body.title,
            author: req.body.author,
            id: id
        }
        books.push(newBook)
        res.status(200).send('Book Added!')
    },
    // get
    read: (req, res)=>{
        res.status(200).send(books)
    },
    // put
    update: (req, res)=>{
        books.forEach((book)=>{
            if(book.id === parseInt(req.params.id)){
                return Object.assign(book, {author:req.query.author},{ title:req.query.title})
            }
        })
        res.status(200).send('Book Updated!')
    },
    // delete
    delete: (req, res)=>{
        books = books.filter(book=>{
            return book.id !== parseInt(req.params.id)
        })
        res.status(200).send('Book Deleted!') 
    }
}