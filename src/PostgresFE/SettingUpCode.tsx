import React from "react";
import SendingCommand from "./SendingCommand";

const SettingUpCode = ({
	sending,
}: {
	sending: { [key: string]: string | boolean | number | object };
}) => {
	return (
		<section id="pg-code" className="mx-2 p-5">
			<div className="d-flex flex-column px-3 col-3 pg-code align-items-left justify-content-center w-100 mt-3">
				<img
					src="https://www.postgresql.org/media/img/about/press/elephant.png"
					width="50"
					height="50"
					alt={"pg-logo"}
				/>
				<h5>The Postgres Side of it</h5>
				<details>
					<summary>CREATE Commands</summary>
					<code>
						CREATE ROLE ha_admin WITH LOGIN PASSWORD 'root';
						<br></br>
						ALTER ROLE ha_admin CREATEDB;
					</code>
					-- \q lets login--
					<code>
						CREATE DATABASE ha_db;
						<br></br>
						<details>
							<summary>CREATE TYPE Address AS</summary>
							<p>
								CREATE TYPE Address AS ( housenumber VARCHAR(30), street
								VARCHAR(30), city VARCHAR(30), state VARCHAR(30), postalCode
								VARCHAR(10), neighborhood VARCHAR(30), countryCode VARCHAR(30));
							</p>
						</details>
						<br></br>
						<details>
							<summary>CREATE TYPE Rules AS</summary>
							<p>
								CREATE TYPE Rules AS ( pets CHAR(3), cleaningCommonRoomsIncluded
								boolean, cleaningPrivateRoomIncluded boolean, playMusic CHAR(3),
								smoking CHAR(3), couple CHAR(3));
							</p>
						</details>
						<br></br>
						<details>
							<summary>CREATE TYPE AdditionalCosts AS</summary>
							<p>
								CREATE TYPE AdditionalCosts AS (water boolean, gas
								boolean,electricity boolean,internet boolean);
							</p>
						</details>
						<br></br>
						<details>
							<summary>CREATE TYPE Facilities AS</summary>
							<p>
								CREATE TYPE Facilities AS (allergyFriendly boolean,
								housematesGender CHAR(25), registrationPossible boolean,
								tenantStatus CHAR(25), freePlaces NUMERIC, bedrooms NUMERIC,
								bedroomFurnished boolean, bedroomSize NUMERIC, bedroomLock
								boolean, balconyTerrace CHAR(25), basement CHAR(25), bathroom
								CHAR(25), garden CHAR(25), kitchen CHAR(25), livingRoom
								CHAR(25), parking CHAR(25), toilet CHAR(25), totalSize NUMERIC,
								wheelchairAccessible boolean, airConditioning boolean, bed
								boolean, closet boolean, desk boolean, dishwasher boolean, dryer
								boolean, internet boolean, roomFurniture boolean, tv boolean,
								washingMachine boolean, wifi boolean, flooring CHAR(25), heating
								CHAR(25), kitchenware CHAR(25), additionalCosts
								AdditionalCosts);
							</p>
						</details>
						<br></br>
						<details>
							<summary>CREATE TYPE Costs AS</summary>
							<p>
								CREATE TYPE Costs AS ( type VARCHAR(20), value VARCHAR(20),
								payableAt VARCHAR(20), payableBy VARCHAR(20), refundable
								BOOLEAN, estimated BOOLEAN, mandatory BOOLEAN );
							</p>
						</details>
						<br></br>
						CREATE TYPE Images AS( url VARCHAR(70) );
						<br></br>
						<details>
							<summary>CREATE TYPE CalendarOperations AS</summary>
							<p>
								CREATE TYPE CalendarOperations AS( type NUMERIC, dateFrom
								VARCHAR(20), dateTo VARCHAR(20) );
							</p>
						</details>
						<br></br>
						<details>
							<summary>CREATE TABLE HAData</summary>
							<p>
								CREATE TABLE hadata( id serial PRIMARY KEY, price NUMERIC,
								currencyCode VARCHAR(20), address Address, type NUMERIC, kind
								NUMERIC, description VARCHAR(200), deposit NUMERIC,
								estimatedBills NUMERIC, minimumStayMonths VARCHAR(20),
								maxBookableDays NUMERIC, moveInWindow NUMERIC, currentOccupancy
								NUMERIC, rules Rules, minAge NUMERIC, maxAge NUMERIC,
								preferredGender VARCHAR(20), alias VARCHAR(20),
								externalReference VARCHAR(100), extraData VARCHAR(100),
								facilities Facilities, calendarOperations CalendarOperations[],
								images Images[], costs Costs[] );
							</p>
						</details>
					</code>
				</details>
				<details>
					<summary>READ Command</summary>
					<code>SELECT * FROM hadata</code>
				</details>
				<details>
					<summary>UPDATE Command</summary>
					<code>
						UPDATE hadata SET rules = '("no",true,true,"no","no","yes")'::rules
						where id='1';
					</code>
				</details>

				<details>
					<summary>INSERT Command</summary>
					<code>
						INSERT INTO hadata ( id, price, currencycode, address, type, kind,
						description, deposit, estimatedbills, minimumstaymonths,
						maxbookabledays, moveinwindow, currentoccupancy, rules, maxage,
						preferredgender, alias, externalreference, extradata, facilities,
						calendaroperations, images, costs) VALUES ( '1'::integer,
						'56700'::numeric, 'EUR'::character varying,
						'("81A","Oostplein","Rotterdam", "South-Holland","3071VN","Oostplein
						Metro Station", "NL")','1'::numeric, '1'::numeric, 'Centrally
						located apartment, very close to public transport and
						supermarkets.'::text, '24000'::numeric, '15000'::numeric,
						'26'::character varying, '30'::numeric, '30'::numeric, '2'::numeric,
						'("no",true,true,"no","no","yes")'::rules,'23'::numeric,
						'male'::character varying, 'the-left-room'::character varying,
						'any-identifier'::character
						varying,'\"onBoardingLink\":\"https://termsandconditions.com/uniqueId\"'::character
						varying,
						'(false,"boys",false,"working",3,3,false,60,true,"no","no","no","no","no","no","no","no",80,true,true,true,true,true,true,true,true,true,true,true,true,"laminate","na","no","(t,t,t,t)")'::facilities,
						ARRAY['(1,"2019-05-29","2020-07-29")']::calendaroperations[],
						ARRAY['("https://picsum.photos/300/300")']::images[],ARRAY['("security-deposit","8000","move-in","tenant",true,false,true)']::costs[])
						returning id;
					</code>
				</details>
				<details>
					<summary>DELETE Command</summary>
					<code>DELETE FROM hadata WHERE id = $1</code>
				</details>
			</div>
			<div className="d-flex align-items-left px-3 mt-5 flex-column">
				<SendingCommand sending={sending} />
			</div>
		</section>
	);
};

export default SettingUpCode;
