import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [BrowserModule, CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
