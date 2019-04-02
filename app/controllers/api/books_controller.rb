class Api::BookshelfController < ApplicationController

  def index
    @books = Book.all
    debugger
  end

  def show
    debugger
    @book = Book.find(id: params[:id])
    render json: @book
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      render `api/book/${@book.id}` <---#this sucks
    end
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