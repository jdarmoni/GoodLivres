class CreateBookshelves < ActiveRecord::Migration[5.2]
  def change
    create_table :bookshelves do |t|
      t.timestamp
      t.integer :user_id, null: false
      t.string :title, null: false
    end
    add_index :bookshelves, :user_id 
    add_index :bookshelves, [:user_id, :title], unique: true
  end
end
