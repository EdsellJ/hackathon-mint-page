use crate::*;

#[near_bindgen]
impl Contract {
    pub fn get_count(&self) -> SeriesId{
        self.counter
    }

    pub fn increment(&mut self){
        self.counter += 1;
    }
}