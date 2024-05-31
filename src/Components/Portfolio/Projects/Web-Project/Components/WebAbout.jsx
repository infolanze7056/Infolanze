import React from 'react';

const WebAbout = () => {
  return (
    <div>
       <div className='bg-[--main-color] lg:px-28 md:px-20 px-5 py-10'>
        <h1 className='lg:text-4xl text-xl text-[--second-color] font-semibold pb-8 text-center'>Web Devlopment Technology</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:items-center gap-6'>
            <div className='grid grid-cols-6 items-center bg-white rounded-2xl shadow'>
                <div className='col-span-2'>
                    <img src="data:image/png;base64,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" alt=""  className='w-full h-full rounded-l-2xl p-5'/>
                </div>
                <div className='col-span-4 rounded-r-2xl text-lg md:text-xl'>React Js</div>
            </div>
            <div className='grid grid-cols-6 items-center bg-white rounded-2xl'>
                <div className='col-span-2 '>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABBVBMVEX///8zMzM0ljBaq1cfHx/f398wMDBUnVFaq09aqVBZpFJZp1FIlUdbr01YoVJMl0pctElbuEYpKSlPp0xOTk5bvkBbwT5TqVCOjo5FRUX5+fno6Oi/3L5bxjkXFxfy+PK42bc9kjzZ6thdXV1czDQ4kjbGxsaZxpgkJCRd0TGcnJzx8fEQEBCJwYfM48u8vLx8fHyoqKgkkCBGo0J8u3o7OzttbW2PxI3q9OoKCgpg2S9wcHCysrJhYWFISEilz6RvtW3U1dSHt4Z3vm2Yz49Isi604qlzrXHR78lry0/k9t991GRHwByd34tipWBv10xX2hs3jDtDjUhBpjI1sSotjC4NigOA8HRvAAAKZklEQVR4nO2cfV/iSBLHIcRw67AykzATBSQBRCJCRIMSHwN76+7e7ezcKOu8/5dy3ekE8tDphCiyyad+f8wDEqu/dldXdVVjoQACgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBtqv57fG2h7Bh1bTh7c62B7FR1YSiyI/r2x7GBoUIi0WNH+SX0SYsFvmDs22PZFNyCIsCX5tveyybkUuIGK/zueWsCItFsXW37eFsQF5CtFRPtz2et5ePsMjncJ0CYfYFhNkXEGZfQJh9AWH2BYTZFxBmX0CYfQFh9vWOhKfjVjFNVVa1OmmsnTkNmbUI64Or8xTGiM4FrSi0uutWZfWSYbR/Mde1dldsDe9tW+sQ3l3yYquWrld1fMDblkR+vE49z/z34ud//fSh0rbWsjZ/wNaIreSE85o9RoG/aqxlDWvnfri0I7YSN0nMXx8/fsSEe5V2tZnc2pVrTePPTy8TEjZur913isP99fo4p/u86LOSsEny25fPnz7+jAl3q9Vq+/dk7lj3WdM0H2AkYX0gat63Xa6zY2AH9Evgu/Fb2h//Ofz8ySUsVzDjL0q8tbti0FoSwrNL3v+TQENMumMcH7SEsCFxGOOO//3z6+GXFeEeAqyWKxU1xtq8RrMWRzjvDsNPCdfjJO7YuIqyqAmMbVn56+To8IuX0J7EcrnyTWdZu+XZfFTCoBOthigO4vjq+xr9WftnxF9Gbcu/nSBAP+FelSCW279HRY76gGEtmvBcjFzWAn/Ajhx30c+SbzC8p62ZP/73/eQoSIimr2ITlqvtPtUdzwQ+li9MiKJYiiE6z9ZilwyKWPtBdzT//H5zQiN0JxGx7qkha/NujANSCRv3sU+JWmiIzrO3ySxqos8dlb++39zQCe1JJIh77YA7ooQwfoGGCCMdMDhEWlu1kdRisTgcrx7rPGLACMKqu07Le3u7vZHH2rnGdgc64ZxP+JTQqoUTgEFik+hntNqUyy83TMIV4t6Funzq+Dq5MQ9hLfEkFPn9EOF+8qe9RntPjwzCqmed7l70X2msfpDIjWyJ40JQ6xjVVoTtp6cTJuESsfePJBRb1N3VS9h+WrAJnXW6x8USilSAOEKNOsRkhOgsMz97oHwDD+FT5enpKI4QI3JxhKI2pkYrNiGKXme0x5IQCi1yHg2n4V4/fEIIBpvQRqzEEBJrtGyFRSi0rvBXz8O5ewJCXnDTn9NxMMsVV3spJng+ZBC2yTrtMQlRckOsNcbXQYpowlUWebp/HfiO8YSaN4VtdP1f9BI+PyMKFqGN2OZYhKInYd7pBpKySELBOQnYh9Cde/80xkaLwI+g7n/cT4j05SaGkGMRiv4axJkfP5rQfkqfGSM7s9/3nYcfwomb32grkKF3fd/bS1jFhBUWIUJsMwmDxg4iqhh+QqGLXjJHUqkky7gmNG+txteinfNSEuJzLoL8dBNN2GtXuE0RSnIJy0AZ4bFLGHW/+DWE1efqEYOw19sYYYlIni4J3RDwxoTV50XoBOwh5N6PkI8uYb9uDtscaw7fjVBkVTFeN4cctzhhEfY25YeEUMJ+OBSGzEpU6r20Wq6W8V55GKxE+QhZEf8VhHoJM0ozFC9OxZhb4SkJ25VdOyVDk8giRIjRZ4uUhA/2i5ZslFjVvFcTStLubpU42mMMIRcZ8f27+3HCiK+RAq6pJqg6v4LQkCSpTXYS7oi10zAI0bFpFaEbV0mzNva+8maEC8OQHEA8iekIURB7IAZP94fBYwfjbMEo4L4hIUJ0CTkWIdd7YZ+ecHJKOQaxz4coviduEacjVP5eLJaA3IIZD5mE9lk2xQl4jfZmWsK/PYTc51cQpq1i4JbjJgm/PnoAuUWqnIatBJUo/iFJ79BfL70OBM8r//a+8sOvF15Cjkm46nu/da0tkTt6CZHbB7469zWJPIS//uACiFGEFxerFtRZ8oqwIKyC5SD6MbEV0aygEtLK/r4CioewoF74ZjFyDn/MvD22QSgoRPDxl97VxGoGaMUYd1wSihq96T/vLnc60Zfg9n2MdMILKZBZRTdifaMWA6OuM1ozcdHRIRRa0Z/4O7vkaYQFc+JZqgsK4QVHuXpyXIvrHgq0QLDD+NE4xUUWodBitlDrA1K0E4OHFF1aMYYIX36M6JnjXYvVDRKGEWeF48toRpGPvnSCCbVi3McZT8d4lYQIkTty7lI1PvoJX75F3jlhrTnW7ZHI2xsCfxA99oFGae9ShFu3GuWgqUxdd/TNYa/MPNrsRLR0RY15SSmiU6oJrKfm10kzvDuxS/0+5i5Zqoanf/gSe/fruBhO1YTr27hrIztXoeK4eL3W9bRU0iV7Gpd9/EQXhgqDQGMk4Ue45/4slqTum5eF3dEghJRLX6ZqNcPz3xh7lyofuxm48rij0Oq+1+/SUHDkkBDhh3L44p4lSbJUolzoW12MWusKntuQEXjxPX85QefbBfeTtBt2wKZMKmPGjLK5kli79jXKxi0vCmiDSTvYlGpKxjR0DaozIVUx+89p2D/rA54fprgKO+9eJgkBb63QQlOmhK9DZpL0UgJq3GX492BYhoz4iAcqlmT/J1kJMBvS8dKUJctdmubIwBM6SXPd/Z8o03Y9p43pqFOymSnumD0pU3uBzoJrUiWM6jbG9KZSZcwnU0Kg0qejZ0s6mSj67VJ0rCTuuFy+at9a+1MaW1WIICSduCjZgpRJs9MZZWlKdSnBKlRJ5MCIU2U6nSiT9xncW0ixA7sa+zacCsgj/I/CqDOrq9mZRF0qyYmiQWeGEBWb0JoVmtkhbCLCiC8pio+8g96JfHWkjAozc5KdX9LmJ1RVlWw4pjVDu6tUmk2Xk+UQmihpNbO00/gIFUMyVPz3yJDd6xPLQ5RDiBLWaT9LiZyfUC7h9KU+k3F8lAwJb6EfDMLjEmZNNMI+3jenTb2jN/slPJm2P+aIUMGr02VRJigQ2tlcjghN9NKqh4j/N8X/yBmh52MlE0myM5gcESr2/Sx9uU5NM29+WLAzNLSNTqaWvmLKE2Fh5ty0k2UUMSZOdM8VYcEqGZIn5udulWJ1mv3JDE8hZpzZr+SM0Hmho07QXBp4oeaI0BqNVM87LPQiLgzniHAmk2XpCIfHnBFO0Z+67x320s0RoY4rU0tEHRehMFmOCAsTu+w06VtWf4RDo5S3vLSgkIiPToi4UFwySGEtT4S4mO9EfBQRSyr5Yr4IEY86ncxmk6m6LFhklVCXSLSzFYr4HikjGVcTsydcEV5WvBUpkhD3buQMVbo9Uj1dCzyh1N+p5PRusrhIC27r15h2FB1HCUqhsEN6N6OMAhZw34UceSX3GOGT0s9BQ59A2JdoQlNoN09lN2RkV52pjD84FLok5NxeyEcnX9f1oKOZ9vUhIze3MWwp1io65sEBgzL7JcmNjs1SsuZptuT09EdKoUN69+GLb5kX2VpkQkq7nZgDWU7koN4wzYfMkSHLsmFlp5G9vjrTkZWHCAgCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBMqu/g/k2ZLOeCwBqQAAAABJRU5ErkJggg==" alt=""  className='w-full h-full rounded-l-2xl p-5'/>
                </div>
                <div className='col-span-4 rounded-r-2xl text-lg md:text-xl'>Node Js</div>
            </div>
            <div className='grid grid-cols-6 items-center bg-white rounded-2xl'>
                <div className='col-span-2 '>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBFQSxyDoEYvXC8KMB0OPQerfDvZNp7B2SPLk83TdVnlRdJT9bjuAG9vaRt_cerqUpiM&usqp=CAU" alt=""  className='w-full h-full rounded-l-2xl p-5'/>
                </div>
                <div className='col-span-4 rounded-r-2xl text-lg md:text-xl'>Anguler Js</div>
            </div>
            <div className='grid grid-cols-6 items-center bg-white rounded-2xl'>
                <div className='col-span-2 '>
                    <img src="data:image/png;base64,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" alt=""  className='w-full h-full rounded-l-2xl p-5'/>
                </div>
                <div className='col-span-4 rounded-r-2xl text-lg md:text-xl'>Vue Js</div>
            </div>
            <div className='grid grid-cols-6 items-center bg-white rounded-2xl'>
                <div className='col-span-2 '>
                    <img src="data:image/png;base64,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" alt=""  className='w-full h-full rounded-l-2xl p-5'/>
                </div>
                <div className='col-span-4 rounded-r-2xl text-lg md:text-xl'>Express</div>
            </div>
            <div className='grid grid-cols-6 items-center bg-white rounded-2xl'>
                <div className='col-span-2 '>
                    <img src="data:image/png;base64,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" alt=""  className='w-full h-full rounded-l-2xl p-5'/>
                </div>
                <div className='col-span-4 rounded-r-2xl text-lg md:text-xl'>MongoDB</div>
            </div>
            <div className='grid grid-cols-6 items-center bg-white rounded-2xl'>
                <div className='col-span-2 '>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABI1BMVEX///8RXobfigMRXojgiQP+/v/diwMPYITghwD779wPXYXegwD+/fwNYIb//v8AWYLnnkkAWIPy2K8PXor1+fsAVYGwx9XhhQDz1Kr+/fn99u3ijADswH4AW4HdhgDYiQDk7PAAU4HutGbikQBCd5nb5OrH1+Dr8/YAWovf6e4AVHkRYIDhjhaEqr8qbpG/0NpajKudt8ZtmLF3pbyVt8jfkwD138T56NP78+blsFjkpELrwIYNYn3mmjzz2rtUiaI4fJpymLI2e44sbIpaj6o2bJKbtM4LXJMATYUlZpI9faq0yttaiqNJfpqMqLdtlLUAUnGfws82eKTooTEAS3PsrFfprGDsyJnvyYzomTXpr1BGhKPtunXsvHHvvYPfojVZgJLKZ0rXAAAWEklEQVR4nO1dC1va2NZOSEJCZDeNCeFmbFBCgkAQBKFaET91HKfiOQ5jaYudOf//V3z7kkBAJODUtvHJO09HTTZxv1lrr9u+SFERIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRXhvUsmmahvqzu/FyMBqnjtO/uNXMn92TF4LRpEWFAUDkx63Sz+7MS0BtAKYARAnwkGSxVv7Z/fn+ME510DLMVn9Pr1R4vXj36saj6UhNC37lShcVSFGy8U/owk/t1neE6RTOVA7zKR84EqMUxqZhWZb6amRpjGVnYkRLTSCJkgSc8/87va2/Eg+itoBe8/10ruuiqFc+VPYk56JVsn5i174XzL4O6u73SUrVTs8dRtJ1SZYVRXaa9fCPR67BKM7USXCGaZbqWqO2rxRsBujnZyZiHmqoTUa6mYy4N+QLp1pmyylIvC5dtn5Wz74byn2erj26CrVT1ZyUzMjKOOTxHEeVzsF1w5PeFEg3taIChyPdCrtVvdPtoj8m5Vy2kKPVKhYYIF+YFBdqm3NQsM8mjkEtl/0iK50xIp26/BhqgpQ1loHmCUnb32/4/aDVKMqMffVbuH1j6Tp14zEwigW6MTPwSje2fXV1Zvzwbn1HqLWUPhmJxvXssIRXzq6uruybUNvUupg6UIln5yjt9+v63P3ffr+ypdMwp49mUaY9NX2j/vHHI3F9tAu01A+xFK0zuaB54Rn38eP8/SRVv4YRTpgpakC6Wd6iXtT5vX5YFZWjzIGuB0Qu9T6keBNap6He8n9pS7MIjqs7uiidhTaC0873LgKacHeOojCtsAZwxmAPGEEFqJqtKJfaj+nQ98Yb6laXglPB/9iK1A9r5dg83xsEmhG1mKL3mmG1Ns090AhoApNJRuT1BvcomwwFTF4fmIGl4IYERCesenqwB2qBvkBtynRqP6Quw3D06+CCRcmRmFRYy1P1lK00gtRUbaTgWAypseEats0ERp4wwOP1x9W5cECt2TDFCJKixvP8ufEj+vP9YZ3ZcnCCZNzofCXIsfyiKF3b/RVGWAPw+k04zalWSNXU4GkKsyiKl/OFjjAgqdYKygrO/A3VlBU7jGkUZ40L+8YqLUuKffVnGAMbUyk0VpPM2L6yAz3nL4ck1Sg8KiM+gfrvtlIMXVmK45qFlXtdlGk9fELkxqn9VWtpmgz0gfGSvXkJqE7qbNV4Ux3oQA9dPcNi5ODsyYMmiVI/bA7DSMm3Kw8tYywxctiEWE5JU4ZagHw4TaZl56W79J1RhjL0vm8U6gGrTMyxTBdClgkbUIau5OrXhaD6MNVgGKkYrpGoMtKZhatoxv6VAoyljTmqVJQY+u5HdOy7AXqLpoG/0xQ7OI3nagwtnlphWqgJPf4AxzRWU2aAXgzyjaVzmOxrIZrG4LizFKmEmo4ORDqwPkzVKhVUYg3NwrckTIBJmFLSAXBoeT9IiNZ5BUj7dSo8HE2A10RzDYmXagcyHShE7b9AFGWnFRY95awL3TFRqg8ZapYsDQIzjQMgibSYAjUzHG6Da+h7LY5TmzqQStSBxAfnR42bIpBoKQUOSqHgaPZ1p0xZYzgODTRTs8LaC7XUOBuIoi45t2HIiNWWLB1Qar/C96Gfq+1JK+Ualtm4cGRJGoQhEDeLMn+rfahUTi28PgMElpuIHhulmiPL12HYdKNd0vw5D2CiCMO3uqOPV/2gal5IIhiEoAB3x8gKo1yTMaXxe60VozLoEe94HYYJv77BqRcvr4uk5PaGaoDUGopnjBmmAEPbX30OXK3Xp8FMQxmvLBQo7FaRSYWtyqjZtXUiltIZSDkhm9L4WFzZCaAtYpZWlJ0wuI0JOKreXMlAToJvY7xXDIFJ9cNslYMMKrldrmstCOg2Vq4s/yIot4ILxdZds8gDmsGQUmFbN2W0lstEbZxKhUKKoWmRhv+7HNfCEYf7YNWX9rhfkEQmVVAuizcHrbuPIVNRBC5gY3BT53W5eHarlcOSC6+LMg9D2cm0d1hKGmuhJQERFT1eqwhR/TElSkwtZAZ0LZRvUqIoFUMWr60Fq6nTtCydhizsXgdqwxEVoFdaxs/uyUsBBrD7NlOpSPuvWIxGqygzClpL9Hptaqn1p23bf9ZfMUXVbECOfpvKeVjyKS6ZDGwTgGTy8XfL2z0ZmiQJnnwEpzaU1E9JEJNZiFXa5bqJRDf7b0IvtZnypjysuubhSdLGpEnQ8oinkMwlRu+H7d14uz28f8gkcot7/4bKdTe/DXeFbYh4+2ir113wRroZgt7Tbws+XnPckxjqH/ZkDGnv/CkdbOx5+Ot5ou/27vNCHoFN59PpdP7rKLGoe93Dnd0YG4sjvIOIb7cfDnOzNiNJbW4QnCSW/lLzP38Y6KtWgWkx4CGA9ETAY8DMhNcBwt7yDYJPoPdJSAuxeCwWY9MIgpDeGI468xyzhzuwHSYXdxFjhd2Hw5lWiCGLILxdzpCyamglCteQaAjUe/rqbHFLNOOMGjEMLa9af/ZjVE0LLAv5xWMCZoj6F2dPerMvq3tcFSBihGEMA7XcGGb872J1hpSloU3TNZlxGTJXfy5c1QBfgq5jggwtHazP8DiPOwQpxvMsosjG44ihMJol+MAiglhHMcN4zP3c9u7IR3F1huTwKetM9mTI2NcLi4zWxZShGLiI5xFGrNdTYWMDWhqoodvb6KeTjr9Z7n2cxQQhoJmBjeEPk1fjexlryBDTLO9jhlgJbXvh+hUTSJJIGDJif12CvarbTyF9NOrkstlcovf56y7s/t/+Ztn37whDdnv3fabT7XY2t4ZYtdH7edfuPZchZY4ZH8PB46okR7VgZukypHV+TYK5T4IrwGrPdznb23nrE2GS2tpAVgWiupWbXN48yROG8Xf/dKZt12To+Bgu3GDL9XVRFImlYUDQfvJ5bA7JKBS+HE5CFBKN5PzNDjdYrJTClx4OWdxWuYc8YRiPH3tDETLcxlZoRYYlh2YUhnEJMAumQEwJMyR1VqCvl5ckj4m9EPKbs25m1oxmjwToR+CArR5SM0FbllCE1qfdmVxcj2G9AhTIEBAxSjfzdUaopJIrYsxwbz2X391xx+B9blmzDPYjbHxjNP8eEvcs8RvCQ9a7thZDTtNx74sDrIf0glmpPnKG0r6DKQIpeF+ZH50jrGVCerQsHs3dI4ZQS/95HItmqsTaCG03tkEMcTSwGkO1ITM8TzPNGnEa+u38ODNhMEOLUh2OV6yl67n8QzIMhXRv2cc2q4iCwAq9x/e6n7aJtdnIEPmuy7CWYvgKzdTqyFLSQBzPqymmLjqqg4UMJNehqB7mn8jN3EAMtxHDTHIJw79ZzFAYLhL0KE/UdPvrcxhy1pnNgArDtMpjzJCm58YZN0BWSK5RY+I3pSa+SrX+0iUIeX4tCHdbSCEUyDIYzHCbjaUfnsgmEDpv3cH6eVHCdPjFDeDy5OaaMrT2oZ2BHW9wZzJmOL8ZANpaNE7r1AVhKJ6S64at4HHJzy2ztpp7KIrn3Y0QrgxjbHtJbza9odZZdDd7L5AodaPzHIZo6QI0pOCO0tDEG2TQN3y3OaqG+CPdPSADVSy6d2AsBNsDvjn7RoybCtAheGKyEvd5HHZBIT5takbEXArD7sLbDy5DgRjadRn2cUjqaGjLIoNj6xm1gzLGSqpSLZl4lHO3bK7JOJ2aX6BjDnQaek/RrSHkHgTP2h8nn0i8cg+u9f+0SJOT8AUQhuy35zAsOzjqhk5CPZMwQ/nA35H6JWIIoMrdpYhbPHdNkenApBIAtAbZj5IjIkjeHPOIdRnGYseLRQTlHCMy+nuRz0zCyJakUvmv7oW1GJpEEGjlcQOQ7MHxq10LjVIRVTzqLkPvuAbrQufRR/XZgVtnMMPJcE68FTyGsU+H87EMRmfoGstRdqG9TQzz2Jzmh89hWJJw7ou6bTrIdihKqjRdUGTsy/CajM75LRGG4Nzd5sE19niAx6g/juMaMmY4XdsLjb0nRhZH1Y84Hu7iu/H4Am+IkCM5BpuvZgnDzMYaMU0djyYRryG6QLZDYeTmtBP1SxStISWlDJchNErktnnOkyv+MAgm1JihMy3IPggx1uXIpvOfs49m+HqEf7z9BEPqH8IwVu0ShptrMISvHOe+RZQ1kXoGLfKTHnC/2TS6i/irbgYFPPdgNHXiIX1qmrQuoJWB8C9e3hFYUpzANYx2b360ZbZdhofUYhy5OlBNrM8QWUgIeYDKF2Uv/J4IpbyvQFNCTp7iAGQIRQy8LJlzB67uD4PKfWRK/YdVofwgloZBJ2EIM/z3h36OXHYUxPCrG9VUO+sz5GoSFBItD3CHxiLALq/p3S4BXIQjY8qREUNFOZjcdfDPIu/zFybQAUomb6eXoJMYvRXSqPyCizRsrL116HOOHsPYcKHDh3j/iOHqGTDXRJaGxifBoTyJWMeiW5BSWzpieE40bizhMoA94W80JTRuaWl63AqnpZALAXOrypKd42H8HU7iY7gYOjyesskeBzMUns/wQsScyFl3ho7Lptj9IVhjnae9mxQu6Ci2vT8Zpi2cMkI19ebOOWhoEEP90erHbOcbqp+xhCDEyWdPjB7D+IswVMeYIcAVNA6mgoghoF1FLKHvYVRObjahqUXGdnq4D8yoUPZMi+b0eVgNFp1Yke0MNwTiFQg+JTyGQsA4nDCcWJo1GPYxQzLyklQLM6SZAbIdSThIIUNbKZObODBFVmlypJq1b8NxyAC55fkXi4bPgwnlgoOdYYvMcHsqxPj2UcdlGGRp3uexMc1PvcUaDB3EkFbcYjeMcHgwGUaqA6MW2t4nPYSJItTfygekgZ6e1hTEkJb63pV6gcHGadHmT1RYGp3EfSAUsyNPhk/5Qzcsmnj8tRhi48koXlq7r/PoLzCQghSOd9AuVA4/tyVX+MqHD7xvXq50iU0NkMouh1qKRpmF8+SilsTxcBsV7bEk05+62Fuwy2Ma6oRE79OobQ2GFk7yJgy5hg45fODtMZLTAdZZyXAZanIF3QQThhyl4vSYrrir6TkK7XQRaX1ZYfzw07t2O+bGOBkk6owXm2eeSJK/pJF2x/JHz2BopBBFWvHilJKDpKSQ8r6DnaG72wExRPLVGf+pMDUcBlUqbiMVSh16w727ZUWZ7qjtTrvE2H+Q7++57k44XpxCdqvpDcxw5xkMzQIzw9C44HnRvrqyb1WqhJP16WaHkoRSd2mmalySCUN8oCOH8w/4vL3lSx+zI49hXkDGxY28WeHb4vywUyUzV+xnNz/srcGwNGFInq02dAUdK23DuPJAwt5x0lsTWVZGmZ2+wTUOwMtotzHUa2iMFEbpB/zWiY+PsVvwFx8OXYZHixJIKLKqO2x7Xga8RtRWxwyZay9fgGqqXMG4RWFKyJJCnE48m6nTsP+Q4XTTI3QhEsDVHTLyihJsoBRqQQXHjhdL598jGR0RNX2qlnOcJzOmsaxHeQ2GWgHXea8nM7vlC8Xmga1IDa2CC0rT7X8Gzumhd/Bv6yylcLgOHJSclACyy4odXPg/9tT0nyT3Bk9OYJ1dbEw/sYThP9QzGDawpWGU6RnMMKmv8NCLD055ZGimfwGGMpCrRP7v1v+EvohkyANUCm/RWI9X2OHiFbLzqNdJtyKaj20tqiZ2TlhMcPvzpF5KGLKrMGzJeBwyU/NYd3AYxxPoF1PPZsExhwj6GXKuNaXxn6e4ESFFXl5hSy5hCFMNXOXdbKNxhmLvRYWaUTVPAgQ3bF1PhjWZBM9ThuUbtCQByg911q+kkCFAOshIMwxLZIpfurFQtQ4X7laYu8nsEhkKO4hh5wilx+i/zcexUG4nhkQcj32dzsysIcMDGSex/kJ3DfgYnvtuWGiKBlrK2U2d1gCFdrh62EBGB0iBG8wpZDxc84lLoDBFxvP2MKt63LRHFDoG2T+LoYItjZ+h5qopYqhfGDMMod6KzMxh00m1tldB9RpH486wwkrzW5MXDC13yoxNp4nmZapYSeFYG803737Czp5lJ65kPYZNV0t91q9cFLHRhPKo6D6z+cYa8zBoqwB9di9Kia9gPW0gJUVzOI+VdG5SJpkdkahNSLsDL/c2RhjGZ2dIJ66TTbOZycfXYnjhzuz67fuZx5DmfRUzmN2eIoYfKvqN4X9E+VRHMpRuG2C+LoU7/+3zzFI2mEWRmAblw+mRax0zODtG5sQ/25+kcn9vuO9ipzu96mOYnMEChmMZewvaH2ZpxJJCxzDLRb0gDCuz88Sqa00vbmQUHc1PsWaqG+3jjm91Wi7xAKkJsThanDHp9n3My/+ro0njXOJ+ww3Rv0xzRx/DTm4WC+LasSvDKRMO2kwRcYSpr+j3fJzaRJE3xP9mPXqdrAJwHJQsynNHAnZ3WCiA/NFx77CTSCQ6nd5xezueTqchw3R1uigq0WZJBgWFOTzudSAOew+7gltprWamygQZpskSuer7nVksKIMU8cSuPHvSDapO8Txj2zPyQMccoCDgEUOzKHmLORTlevYci2QmDrsSEyDJ3eHR/dujIS5IoFVuMYH15xKbu6zLMB4T8u3hcNh268Do39yaqDQOEOCDUSE27UIQ2AUxkeMytPwP0FJEhvbM6eGQIcqIHzO0iA1Fq/9opTijwTC7zbP5GbjRGvp3POPfM7uCR3G2LURvfl2b+xTX5+D5Y/jp3acZzubkKnaIkOGB/yqnHixmSBETQxjOF2hyPeTN4/7uYhoxNp+ZHTXJ3pd03pPNHD53fU4Hr8VALwA+ddf37uJPMqQhw1n7h2aVYG+V2T8TQhjCPP9/c/6gfk67UxrMpfHoV2QzbZjOoW5DYm69IiZsDBPJ+Q3liZ10mnVlt+0XUix+8nk6pYMYvpvArWpto9rIuwUMUc0amgfgZ5gkk5906nKWN2SIBFWpnM8xLA1wjIAyq8Uni21+reKXvLu7i0PMfPVtb2EkcHgv5OFwymNBIqp5N8t696494QgZxnbnANuiLwsY1gjmOqaSq3MrwLg6uXzbmEvhywO8upam5etFMTfqVjfzcH80xDh5uzN6qvQL5fh55+3JlyrEly8nb79tncRZvCSq3d7e3fK8QWdrMY5XWiP1DJiEIcyDn9ghjl99NnHY29zcPExkJ5cWN8wlDjc3M27LxNYXtJSITFy1R0sXVr0UOC/hAvKSEtvKS6eTcz9lDx+qgruYVli+dOzFoNaAO1UelNsv3SMx246aNs317rfjmGLsqaL4iyJJlYpuMvJipxh0M0MU3KS/vdQvWIYkZewzKO/lpZVPVl0XHJXsbuXTQv7H6ijaIYT0yCymFOTs9ZvAQw/+FTr36Ue544tCtdDiPKtcQ5VHvsLzL3yyDzQ5vR/Jj6O0QRNizMgw3KY/fNDDds5GEDjqroBWJqIZe5g7Vf77Iwj+0C32kGEKeAvgaVG+eWUSJDsUwISf0zB+doe+O6ATBAUZKqmEzvIzX+d2VLV+MHacflOzqF/+XK1/izevU4SUe7At9yoPEYkQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECL8i/h+w2oDGesy6HAAAAABJRU5ErkJggg==" alt=""  className='w-full h-full rounded-l-2xl p-5'/>
                </div>
                <div className='col-span-4 rounded-r-2xl text-lg md:text-xl'>MySQL</div>
            </div>
            <div className='grid grid-cols-6 items-center bg-white rounded-2xl'>
                <div className='col-span-2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AquqDX2Rf74zh6OxviKxbB7lcjApL5PEjQ&s" alt=""  className='w-full h-full rounded-l-2xl p-5'/>
                </div>
                <div className='col-span-4 rounded-r-2xl text-lg md:text-xl'>Java Script</div>
            </div>
        </div>
                </div>
    </div>
  )
}

export default WebAbout