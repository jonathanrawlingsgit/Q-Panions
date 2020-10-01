class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.text :about
      t.string :image
      t.string :platform
      t.string :password_digest
      t.string :email

      t.timestamps
    end
  end
end
