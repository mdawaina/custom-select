

export class CenterFormValues { 
    specializations: number[] = []; 
    constructor(center?: CenterFormValues) {
      if (center) {        
        this.specializations = center.specializations;
      }
    }
  }