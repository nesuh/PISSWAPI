import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { SchemaCrudService } from "../service";

@Controller()
export class SchemaCrudController {
    constructor(
        private readonly schemaCrudService: SchemaCrudService,
    ) {
    }

    @Get()
    async findAll() {
        return await this.schemaCrudService.findAll()
    }

    @Get('/:id')
    async findOne(
        @Param('id') id: string
    ) {
        return await this.schemaCrudService.findOne(id)
    }

    @Post()
    @ApiBody({ schema: {} })
    async create(
        @Body() itemData: any
    ) {
        return await this.schemaCrudService.create(itemData)
    }

    @Put('/:id')
    @ApiBody({ schema: {} })
    async update(
        @Param('id') id: string,
        @Body() itemData: any
    ) {
        return await this.schemaCrudService.update(id, itemData)
    }

    @Delete('/:id')
    async delete(
        @Param('id') id: string
    ) {
        return await this.schemaCrudService.delete(id)
    }
}
