class Api::BooksController < ApplicationController

  def index
    # you only want the books associated with the bookshelf_id
    if params[:bookshelfId]

      @bookshelf = Bookshelf.find_by(id: Integer(params[:bookshelfId]) )
    
      @books = @bookshelf.books
    else
      @books = Book.all
    end
      render :index
  end

  def show
    
    @book = Book.find_by(id: params[:id])
    @bookshelves = @book.bookshelves
    render :show
  end

  def create
    @book = Book.new(book_params)
    # if @book.save
    #   render `api/books/${@book.id}` <---#this sucks
    # end
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy
    render "api/bookshelves/show" #<----
  end

  private 

  def book_params
    params.require(:books).permit(:title, :description, :author, :published_date, :pages)
  end
end