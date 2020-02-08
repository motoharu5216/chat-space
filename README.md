# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## userテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|string|null: false|
|mail|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :messages
- has_many :groups,through::user_groups
- has_many :users_groups
## messageテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|text|text|null: false|
|text|text|
|image|text|
|user_id|references|null: false|
|groups_id|references|null: false|
### Association
- belongs_to :user
- belongs_to :group
## groupテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|name|string|null: false|

### Association
- has_many :users,through :users_groups
- has_many :messages
- has_many :users_groups
## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|user_id|references|null: false|
|group_id|references|null: false|
