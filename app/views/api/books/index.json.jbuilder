
@books.each do |book|
    json.set! book.id do
        json.extract! book, :id, :title, :description, :author, :published_date, :pages, :image
        json.bookshelves book.bookshelves.where(user_id: current_user.id).sort_by{|obj| obj.title }   
        json.shelvings book.shelvings.select(:id)  
    end
end

