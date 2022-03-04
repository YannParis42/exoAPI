import {
  Component,
  OnInit
} from '@angular/core';
import {
  ApiRandomUser
} from 'src/models/api-random user/api-random-user';
import {
  ApiRequestService
} from 'src/service/api-request.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit {

  randomUser: ApiRandomUser | undefined;

  constructor(private apiRequestService: ApiRequestService) {}

  ngOnInit(): void {
    this.apiRequestService.getRandomUser().subscribe((jsonResponse) => {
      console.log(jsonResponse.results);
      this.randomUser = jsonResponse.results[0]
      console.log(this.randomUser);

    });
  }

  newProfil() {
    this.apiRequestService.getRandomUser().subscribe((jsonResponse) => {
      this.randomUser = jsonResponse.results[0]
    });
  }
}
