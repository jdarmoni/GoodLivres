class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.timestamps
      t.integer :book_id, null: false
      t.text :content
      t.integer :user_id, null: false
      t.integer :rating, null: false
    end
    add_index :reviews, :book_id
    add_index :reviews, :user_id
    add_index :reviews, [:book_id, :user_id], unique: true

  end
end
