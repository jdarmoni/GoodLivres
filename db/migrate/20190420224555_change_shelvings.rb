class ChangeShelvings < ActiveRecord::Migration[5.2]
  def change

    add_index :shelvings, [:book_id, :bookshelf_id], unique: true

  end
end
