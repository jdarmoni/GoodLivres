class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :shelvings do |t|
      t.timestamp
      t.integer :book_id, null: false
      t.string :bookshelf_id, null: false
    end
    add_index :shelvings, :book_id
    add_index :shelvings, :bookshelf_id
  end
end
