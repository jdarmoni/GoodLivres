class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.timestamps
      t.string :title, null: false
      t.string :description, null: false
      t.string :author, null: false
      t.integer :published_date
      t.integer :pages
    end
  end
end
