/* eslint-disable*/
import {
  Flex,
  Table,
  SimpleGrid,
  Icon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useGlobalFilter, usePagination, useTable } from "react-table";

import { IoIosCheckmarkCircle, IoMdClose } from "react-icons/io";
// Custom components
export default function CheckTable(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Flex
      direction='column'
      w='1170px'
      maxW='100%'
      px='0px'
      overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Table {...getTableProps()} variant='simple' color='gray.500' mb='24px'>
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr
              {...headerGroup.getHeaderGroupProps()}
              key={index}
              borderBottom='1px solid'
              borderColor={borderColor}>
              <SimpleGrid columns='4' gap='20px' w='100%'>
                {headerGroup.headers.map((column, index) => (
                  <Th
                    border='0px solid transparent'
                    {...column.getHeaderProps()}
                    pe='10px'
                    key={index}>
                    <Flex
                      justify='space-between'
                      align='center'
                      fontSize={{ sm: "10px", lg: "12px" }}
                      color='tansparent'>
                      {column.render("Header")}
                    </Flex>
                  </Th>
                ))}
              </SimpleGrid>
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                <SimpleGrid columns='4' gap='20px' w='100%'>
                  {row.cells.map((cell, index) => {
                    let data = "";
                    if (cell.column.Header === " ") {
                      {
                        cell.value === "yes"
                          ? (data = (
                              <Icon
                                w='24px'
                                h='24px'
                                color='green.500'
                                as={IoIosCheckmarkCircle}
                              />
                            ))
                          : cell.value === "no"
                          ? (data = (
                              <Icon
                                w='24px'
                                h='24px'
                                color='red.500'
                                as={IoMdClose}
                              />
                            ))
                          : (data = (
                              <Text
                                me='10px'
                                color={textColor}
                                fontSize='sm'
                                fontWeight='700'>
                                {cell.value}
                              </Text>
                            ));
                      }
                    } else if (cell.column.Header === "FREE") {
                      {
                        cell.value === "yes"
                          ? (data = (
                              <Icon
                                w='24px'
                                h='24px'
                                color='green.500'
                                as={IoIosCheckmarkCircle}
                              />
                            ))
                          : cell.value === "no"
                          ? (data = (
                              <Icon
                                w='24px'
                                h='24px'
                                color='red.500'
                                as={IoMdClose}
                              />
                            ))
                          : (data = (
                              <Text
                                me='10px'
                                color={textColor}
                                fontSize='sm'
                                fontWeight='700'>
                                {cell.value}
                              </Text>
                            ));
                      }
                    } else if (cell.column.Header === "FREELANCER") {
                      {
                        cell.value === "yes"
                          ? (data = (
                              <Icon
                                w='24px'
                                h='24px'
                                color='green.500'
                                as={IoIosCheckmarkCircle}
                              />
                            ))
                          : cell.value === "no"
                          ? (data = (
                              <Icon
                                w='24px'
                                h='24px'
                                color='red.500'
                                as={IoMdClose}
                              />
                            ))
                          : (data = (
                              <Text
                                me='10px'
                                color={textColor}
                                fontSize='sm'
                                fontWeight='700'>
                                {cell.value}
                              </Text>
                            ));
                      }
                    } else if (cell.column.Header === "COMPANY") {
                      {
                        cell.value === "yes"
                          ? (data = (
                              <Icon
                                w='24px'
                                h='24px'
                                color='green.500'
                                as={IoIosCheckmarkCircle}
                              />
                            ))
                          : cell.value === "no"
                          ? (data = (
                              <Icon
                                w='24px'
                                h='24px'
                                color='red.500'
                                as={IoMdClose}
                              />
                            ))
                          : (data = (
                              <Text
                                me='10px'
                                color={textColor}
                                fontSize='sm'
                                fontWeight='700'>
                                {cell.value}
                              </Text>
                            ));
                      }
                    }
                    return (
                      <Td
                        {...cell.getCellProps()}
                        key={index}
                        fontSize={{ sm: "14px" }}
                        minW={{ sm: "150px", md: "200px", lg: "auto" }}
                        borderColor='transparent'>
                        {data}
                      </Td>
                    );
                  })}
                </SimpleGrid>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Flex>
  );
}
