import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: recipe[] = [
    new recipe('A Test Recipe',
    'this is simply a test',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmtLHsz_1_msOjAdfnJesbyHdKoZRPNzRdQ&usqp=CAU'
    ),
    new recipe('A Test Recipe',
    'this is simply a test',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnmtLHsz_1_msOjAdfnJesbyHdKoZRPNzRdQ&usqp=CAU'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
