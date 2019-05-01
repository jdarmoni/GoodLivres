class Api::ShelvingController < ApplicationController

  def index
    @shelf = Shelving.all.where(bookshelf_id: params[:bookshelfId])
    # debugger
    render :index #I rendered the JSON of shelf because the index view wasn't working (undefined method error :book_id???)
  end

  def show 
    
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