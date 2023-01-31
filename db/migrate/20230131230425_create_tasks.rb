class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.belongs_to :project_role, null: false, foreign_key: true
      t.string :title
      t.string :description
      t.boolean :completed
      t.datetime :deadline

      t.timestamps
    end
  end
end
