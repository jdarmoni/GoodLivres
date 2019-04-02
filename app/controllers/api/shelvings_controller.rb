class Api::ShelvingsController < ApplicationController
before_action: require_logged_in

  def create
    debbuger
    @shelf = Shelving.new(shelving_params)
  end

  def destroy
    debugger
    @shelf = Shelving.find(params[:id])
    @shelf.destroy
  end

  private

  def shelving_params
    debugger
    params.require(:shelving).permit(:book_id, :bookshelf_id)
  end
end