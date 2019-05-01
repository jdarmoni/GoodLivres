shelvings = []
if current_user
  book.shelvings.each do |shelving|
    shelvings.push(shelving) if shelving.shelf.user_id == current_user.id
  end
end


json.extract! @book, :id, :title, :description, :author, :published_date, :pages, :image
json.bookshelves @book.bookshelves.where(user_id: current_user.id)
json.shelves shelvings