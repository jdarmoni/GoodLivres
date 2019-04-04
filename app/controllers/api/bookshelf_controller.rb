class Api::BookshelfController < ApplicationController

    def index
        #no id for when current user is nil 
        
        @bookshelves = Bookshelf.where(user_id: current_user.id)
        
        if @bookshelves.first === nil
            # debugger
            Bookshelf.new({user_id: current_user.id, title: "All"}).save;
            Bookshelf.new({user_id: current_user.id, title: "Read"}).save;
            Bookshelf.new({user_id: current_user.id, title: "Current Read"}).save;
            Bookshelf.new({user_id: current_user.id, title: "Want to Read"}).save;
        end
        render json: @bookshelves
        # shelvings
    end

    def show
      @bookshelf = Bookshelf.find_by(id: params[:id])
      render json: @bookshelf
    end

    def create  
      @bookshelf = Bookshelf.new(bookshelf_params)
      if @bookshelf.save
        # render @bookshelf
        # this doesn't render in the traditional sense 
        # it's taking info from database
        # putting into json form (via the json show) 
        # now that its in json form, send it to front end reducers
          render "api/bookshelves/show" 
        end
    end

    def destroy
      
      @bookshelf = Bookshelf.find(params[:id])
      @bookshelf.destroy
      render "api/bookshelves/show" 
    end

    private

  def bookshelf_params
    params.require(:bookshelf).permit(:title, :user_id)
  end
end