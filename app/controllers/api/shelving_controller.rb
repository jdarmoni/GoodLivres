class Api::ShelvingController < ApplicationController

  def index
    @shelves = Shelving.all
    # debugger
    render :index 
  end

  def show 
      @shelf = Shelving.all.where(bookshelf_id: params[:bookshelfId])
      render :show
  end

  def create
    # if you are adding it to 
    @newShelf = Shelving.new(shelving_params)
    if @newShelf.save
      render json: @newShelf
    end
  end

  def destroy
    # debugger
    @shelf = Shelving.find(params[:id])
    @shelf.destroy
  end

  private

  def shelving_params
    
    params.require(:shelving).permit(:book_id, :bookshelf_id)
  end
end