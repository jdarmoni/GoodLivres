class Api::ShelvingController < ApplicationController

  def index
    @shelves = Shelving.all
    render :index 
  end

  def show 
      @shelf = Shelving.all.where(bookshelf_id: params[:bookshelfId])
      render :show
  end

  def create
    @newShelf = Shelving.new(shelving_params)
    @current_user = Bookshelf.find_by(id: shelving_params[:bookshelf_id]).user_id
    @bookshelfTitle = Bookshelf.find_by(id: @newShelf.bookshelf_id).title

    if @newShelf.save
          # this should only run if the new shelving is creating a default bookshelf
          # if you select another default bookshelf, find other defaults and destroy their join
          if @bookshelfTitle == "Read" || @bookshelfTitle == "Currently Reading" || @bookshelfTitle == "Want to Read"
            @shelves = Book.find_by(id: shelving_params[:book_id]).bookshelves.where(user_id: @current_user)
            
            @shelves.each do |shelf|
              if shelf.title == 'Read' || shelf.title == 'Currently Reading' || shelf.title == 'Want to Read'
                
                @shelvingToKill = Bookshelf.find_by(id: shelf.id).shelvings.where(book_id: shelving_params[:book_id])[0]
                
                if @newShelf.id != @shelvingToKill.id
                  
                  @shelvingToKill.destroy
                  
                  # Book.find_by(id: shelving_params[:book_id]).bookshelves.where(user_id: @current_user) 
                  # will now have the bookshelves minus the one you destroy
                end
              end
            end
            
          end
          if @shelves
            
            @shelves = Book.find_by(id: shelving_params[:book_id]).bookshelves.where(user_id: @current_user) 
          end
          
          render :show
      # render json: @newShelf
    end
  end

  def destroy
    
    @shelf = Shelving.find(params[:id])
    @shelf.destroy
    render json: {id: @shelf.id, book_id: @shelf.book_id}
  end

  private

  def shelving_params
    
    params.require(:shelving).permit(:book_id, :bookshelf_id)
  end
end