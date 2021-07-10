export interface New {
  created_at:       Date;
  title:            string;
  url:              string;
  author:           string;
  points:           string;
  story_text:       string;
  comment_text:     string;
  num_comments:     string;
  story_id:         number;
  story_title:      string;
  story_url:        string;
  parent_id:        number;
  created_at_i:     number;
  _tags:            string[];
  objectID:         string;
  _highlightResult: HighlightResult;
}

export interface HighlightResult {
  author:       Author;
  comment_text: Author;
  story_title:  Author;
  story_url:    Author;
}

export interface Author {
  value:             string;
  matchLevel:        string;
  matchedWords:      string[];
  fullyHighlighted?: boolean;
}