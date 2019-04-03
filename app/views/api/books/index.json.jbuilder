
@books.each do |book|
    json.set! book.id do
        json.extract! book, :id, :title, :description, :author, :published_date, :pages
    end
end

