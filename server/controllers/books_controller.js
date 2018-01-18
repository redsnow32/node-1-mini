let books = [];
let id = 0;

module.exports= {
    create: (req, res) =>{
        //info in req.body
        id++
        let newBook = {
            id:id,
            title:req.body.title,
            author:req.body.author
        }
        books.push(newBook)
        res.status(200).send("Book Added!")
    },
    read: (req, res)=> {
        res.status(200).send(books)
    },
    update: (req, res) => { 
            for(var i = 0; i < books.length; i++) {
                if(books[i].id === parseInt(req.params.id)) {
                    books[i].title=req.body.title,
                    books[i].author=req.body.author
                    
            }
        }
        
        res.status(200).send("Book updated!")
    },
    delete: (req, res)=>{
        books = books.filter(function(book) {
            return book.id !== parseInt(req.params.id)
        })
        res.status(200).send('Book is deleted!')
    }

}