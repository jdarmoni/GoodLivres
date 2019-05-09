class Api::BookshelfController < ApplicationController

    def index
        #no id for when current user is nil 
        @bookshelves = Bookshelf.where(user_id: current_user.id)
        if @bookshelves.first === nil
            Bookshelf.new({user_id: current_user.id, title: "All"}).save;
            Bookshelf.new({user_id: current_user.id, title: "Read"}).save;
            Bookshelf.new({user_id: current_user.id, title: "Want to Read"}).save;
            Bookshelf.new({user_id: current_user.id, title: "Currently Reading"}).save;
        end
        render json: @bookshelves
        # shelvings
    end

    def show

      @bookshelf = Bookshelf.find_by(id: params[:id])
      render :show
    end

    def create  
      @bookshelf = Bookshelf.new(bookshelf_params)
       
      if @bookshelf.save
          render :show 
      end
    end

    def destroy
      
      @bookshelf = Bookshelf.find(params[:id])
      if @bookshelf.title != "All" && @bookshelf.title != "Read" && @bookshelf.title != "Currently Reading" && @bookshelf.title != "Want to Read"
        @bookshelf.destroy
        render :show 
      end
    end

    private

  def bookshelf_params
    params.require(:bookshelf).permit(:title, :user_id)
  end
end