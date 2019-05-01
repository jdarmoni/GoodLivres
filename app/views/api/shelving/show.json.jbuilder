@shelf.each do |shelf|
   json.set! shelf.id do
        json.extract! shelf, :book_id, :bookshelf_id, :id
   end
end

