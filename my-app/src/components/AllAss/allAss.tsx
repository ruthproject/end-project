import { Box, FormControlLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import { keyBy } from 'lodash';
import React from 'react';
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Api from '../../Api';

export interface select {
    mail: string,
    checked: boolean
}
const AllAss = (props: { curretUser: number }) => {

    const [allAss, SetAllAss] = useState([]);
    const [allAssselected, SetAllAsSselected] = useState([]);
    const [selectedAss, setSelectedAss] = useState<select[]>([]);
    const [checked1, setChecked1] = useState<boolean>(false);


    const getAllAss = async () => {
        const data = await Api({ url: `Assistants/GetByManger?id=${props.curretUser}` })
        SetAllAss(data)
        SetAllAsSselected(data)
    }

    useEffect(() => {
        getAllAss();
    }, [])

    const [search, setSearch] = useState({
        SchoolName: '',
        Mail: '',
        FirstName: ''
    })

    useEffect(() => {
        const filteredAss = allAss.filter(({ SchoolName = '', Mail = '', FirstName = '' }) => SchoolName.includes(search.SchoolName) && Mail.includes(search.Mail) && FirstName.includes(search.FirstName))
        SetAllAsSselected(filteredAss)
    }, [search])


    const Click = (mail: string) => {
        const selectArray = selectedAss;
        var index = -1
        let bool = true
        selectArray.map((item: any, i: number) => {
            if (item.mail === mail) {
                index = i
                return;
            }

        })
        console.log(index)
        console.log(mail)
        index >= 0 ? selectArray[index].checked = !selectArray[index].checked : selectArray.push({ mail: mail, checked: true })
        // index >= 0 ?  bool= selectArray[index].checked: bool= true
        setSelectedAss(selectArray)
        console.log(selectedAss)
        // return bool
    }

    useEffect(() => {
        console.log(checked1)
        if (checked1) {
            const arr: select[] = [] 
            setSelectedAss([]);
            allAssselected.map((m: any) => { arr.push({ mail: m.Mail, checked: true }) })
            setSelectedAss(arr)
        }
        else setSelectedAss([])
    }, [checked1])
    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                <Paper >
                    <TableContainer >
                        <Table stickyHeader aria-label="sticky table" >
                            <TableHead>
                                <TableRow >
                                    {
                                        <TableCell></TableCell>
                                    }
                                    {
                                        // <FormControlLabel
                                        //     label="Parent"
                                        //     control={
                                        <Checkbox
                                            checked={checked1}
                                            // indeterminate={checked[0] !== checked[1]}
                                            onChange={() => setChecked1(!checked1)}
                                        />
                                        //     }
                                        // />

                                    }
                                    {
                                        <TableCell>
                                            {'שם'}
                                            <input type="text" name="FirstName" value={search.FirstName}
                                                onChange={(e) => setSearch({ ...search, [e.target.name]: e.target.value })} />

                                        </TableCell>
                                    }
                                    {
                                        <TableCell>{'שם סמינר'}
                                            <input type="text" name="SchoolName" value={search.SchoolName}
                                                onChange={(e) => setSearch({ ...search, [e.target.name]: e.target.value })} />
                                        </TableCell>
                                    }
                                    {
                                        <TableCell>{'מייל'}
                                            <input type="text" name="Mail" value={search.Mail}
                                                onChange={(e) => { setSearch({ ...search, [e.target.name]: e.target.value }) }} />
                                        </TableCell>
                                    }
                                    {
                                        <TableCell>{'סטטוס'}</TableCell>
                                    }
                                    {
                                        <TableCell>{'סך שעות לסמינר'}

                                        </TableCell>
                                    }

                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {allAssselected?.map((item: any, i: any) => {
                                    const isItemSelected = selectedAss.find((h: select) => h.mail === item.Mail)?.checked;
                                    console.log(isItemSelected)
                                    const labelId = `enhanced-table-checkbox-${i}`;
                                    // console.log(item['ProjectId'])
                                    // console.log(i)
                                    return (


                                        <TableRow
                                            hover
                                            // onClick={(event: any) => handleClick(event, item.Mail)}

                                            role="checkbox"
                                            // aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={i}
                                        // selected={isItemSelected}
                                        >
                                            {
                                                //     <Checkbox
                                                //     checked={selectedAss[0].checked}
                                                //     // value={`name${i}`}
                                                //     onChange={handleChange}
                                                //     inputProps={{ 'aria-label': 'controlled' }}
                                                //   />
                                                <Checkbox
                                                    // type='checkbox'
                                                    // name={`name${i}`}
                                                    // checked={handleChange(item.Mail)}
                                                    checked={isItemSelected}
                                                    onClick={() => Click(item.Mail)}
                                                />

                                                // <Checkbox
                                                // // onClick={()=>Click(item.Mail)}
                                                //     checked={selectedAss.find((m)=>m['mail']=item.Mail)?.checked}
                                                //     // onChange={setSelectedAss({...selectedAss})}
                                                //     inputProps={{ 'aria-label': 'controlled' }}
                                                // />

                                                // <Checkbox
                                                //     // value={`name${i}`}
                                                //     // checked={isItemSelected}
                                                //     // onClick={(event: any) => Click(event, item.Mail)}
                                                // />

                                            }
                                            {/* {
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                            } */}

                                            {
                                                <TableCell  >{item['FirstName'] + ' ' + item['LastName']}</TableCell>
                                            }
                                            {
                                                <TableCell >{item['SchoolName']}</TableCell>
                                            }
                                            {
                                                <TableCell >{item['Mail']}</TableCell>
                                            }
                                            {
                                                <TableCell >{item['Status'] == true ? 'מאושר' : 'לא'}</TableCell>
                                            }
                                            {
                                                <TableCell >{item['sumHours']}</TableCell>
                                            }
                                        </TableRow>


                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Paper>


            </Box>
            <button onClick={() => selectedAss.map((m: any) => { if (m.checked) console.log(m.mail) })}>mail</button>
            {/* <button onClick={() => Api({ url: 'Mails/SendMail' ,method:'POST'})}>mail</button> */}


        </div>)
}

export default connect(
    (state: any) => {
        return {
            curretUser: state.users.curretUser
        }
    }
)(AllAss)