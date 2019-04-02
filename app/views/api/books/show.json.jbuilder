# books = [];
# @book.shelvings each do |shelving|
#   books.push(shelving.id) 
# end
json.extract! @book, :title, :description, :author, :published_date, :pages

