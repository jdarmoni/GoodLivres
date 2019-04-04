class CreateShelvings < ActiveRecord::Migration[5.2]
  def change
    create_table :shelvings do |t|
      t.timestamps
      t.integer :book_id, null: false
      t.integer :bookshelf_id, null: false
    end
  end
end
