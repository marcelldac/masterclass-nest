import { Body, Controller, Get, Post } from '@nestjs/common';
import {randomUUID} from 'node:crypto';

import { PrismaService } from './database/prisma.service';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';

@Controller('app')
export class AppController {
  constructor(
   private prisma: PrismaService, 
  ){}
  @Get('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const {name, function: memberFunction} = body;
    const member = await this.prisma.rocketTeamMember.create({
      data:{
        id: randomUUID(),
        name,
        function: memberFunction
      }
    })
    return {
      member
    };
  }
}
