# DB設計

## users table
| Column | Type    | Options                   |
|:-------|:--------|:-------------------------:|
| name   | string  | index: true, null: false  |
| mail   | string  | null:false, unique: true  |

### Association
* has_many: recipes
* has_one: myfolder
* has_many: histories
* has_many: kondates
* has_many: comments

## recipes table
| Column     | Type    | Options                 |
|:-----------|:--------|:-----------------------:|
| title      | string  | index: true, null: false|
| catch_copy | text    | null: false             |
| image      | string  |                         |
| point      | text    | null: false             |
| background | text    | null: false             |

### Association
* belongs_to: user
* has_many: materials
* has_many: cooking_methods
* belongs_to: myfolder
* has_many: comments
* has_many: tsukurepos

## materials table
| Column    | Type    | Options           |
|:----------|:--------|:-----------------:|
| name      | string  | null: false       |
| quantity  | string  | null: false       |
| recipe_id | integer | foreign_key: true |

### Association
* belongs_to: recipe

## cooking_methods table
| Column    | Type    | Options           |
|:----------|:--------|:-----------------:|
| body      | text    | null: false       |
| num       | integer | null: false       |
| recipe_id | integer | foreign_key: true |
| image     | string  |                   |

### Association
* belongs_to: recipe

## comments table
| Column    | Type    | Options           |
|:----------|:--------|:-----------------:|
| body      | text    | null: false       |
| user_id   | integer | foreign_key: true |
| recipe_id | integer | foreign_key: true |

### Association
* belongs_to: user
* belongs_to: recipe

## myfolders table
| Column    | Type    | Options           |
|:----------|:--------|:-----------------:|
| user_id   | integer | foreign_key: true |
| recipe_id | integer | foreign_key: true |

### Association
* belongs_to: user
* has_many: recipes

## kondates table
| Column     | Type    | Options                 |
|:-----------|:--------|:-----------------------:|
| title      | string  | index: true, null: false|
| knack      | text    | null: false             |
| image      | string  |                         |
| point      | text    | null: false             |
| cook_time  | integer | null: false             |

### Association
* belongs_to: user

## tags table
| Column        | Type    | Options           |
|:--------------|:--------|:-----------------:|
| myfolder_id   | integer | foreign_key: true |
| name          | string  | null: false       |

### Association
* belongs_to: myfolder

## keywords table
| Column     | Type    | Options           |
|:-----------|:--------|:-----------------:|
| word       | string  | null: false       |
| search_num | integer | null: false       |

### Association


## histories table
| Column     | Type    | Options           |
|:-----------|:--------|:-----------------:|
| user_id    | integer | null: false       |
| recipe_id  | integer | null: false       |

### Association
* belongs_to: user

## tsukurepos table
| Column    | Type    | Options           |
|:----------|:--------|:-----------------:|
| text      | text    | null: false       |
| image     | string  |                   |
| iine      | integer | null: false       |
| recipe_id | integer | null: false       |

### Association
* belongs_to: recipe

