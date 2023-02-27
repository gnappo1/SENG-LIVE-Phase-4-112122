class Production < ApplicationRecord
    validates :title, presence: true
    validates :budget, numericality: {greater_than: 0}
    has_many :cast_members, dependent: :destroy
    has_many :tickets, dependent: :destroy
    has_many :users, through: :tickets
end
