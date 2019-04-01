class Api::ShelvingsController < ApplicationController
before_action: require_logged_in

  def create
    # @shelf = Shelving.new(params[:book_id], :bookshelf_id)
    debbuger
  end

  private

  def shelving_params
    debugger
    params.require(:shelving).permit(:book_id, :bookshelf_id)
  end
end